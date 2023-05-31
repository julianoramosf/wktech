import { ChangeEvent, FC, useEffect, useState } from "react";
import { TitlePage } from "../../components/titlePage/titlePage";
import { DrawerComponent } from "../../components/drawer/drawer";
import { Form, PrincipalContainer } from "./style";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { Table } from "../../components/table/table";
import { IColumnsView } from "../../utils/interfaces/components/table";
import { Input } from "../../components/form/input";
import {
  backgroundButtonAction,
  colorLabelDefault,
  loadingTableDefault,
} from "../../style/global";
import { Button } from "../../components/form/button";
import { useControlDrawer } from "../../context/controlDrawer";
import { IconButton, Tooltip } from "@mui/material";
import { messages } from "../../helpers/messages";
import { Loading } from "../../components/loading/loading";
import { handleApi } from "../../utils/requests";
import { toast } from "react-toastify";
import { ContentConfirmActionModal } from "../../components/modal/contents/confirmActionModal";
import { ModalComponent } from "../../components/modal/modal";

const Initial: FC = () => {
  const [nome, setNome] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(true);
  const [
    openModalConfirmDeleteCategories,
    setOpenModalConfirmDeleteCategories,
  ] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const { setControlDrawer } = useControlDrawer();
  const [categorias, setCategorias] = useState<any>([]);
  const [categoriaId, setCategoriaId] = useState<string>("");

  const handleSubmit = async (e?: ChangeEvent, id?: string) => {
    e?.preventDefault();

    if (nome === "") {
      setInvalid(true);
    } else {
      let payload: any = {
        nome: nome,
      };

      if (id) {
        payload.id = id;
        await handleApi.EditarCategoria(payload).then(() => {
          toast.success("Categoria editada com sucesso");
        });
      } else {
        await handleApi.CadastrarCategoria(payload).then(() => {
          toast.success("Categoria cadastrada com sucesso");
        });
      }
      GetListaCategoria();
      setNome("");
      setControlDrawer(false);
      setLoading(false);
    }
  };

  const columns: IColumnsView[] = [
    {
      name: "id",
      selector: (row: { id: string }) => row.id,
      cell: (row: { id: string }) => <span>{row.id}</span>,
    },
    {
      name: "Nome",
      selector: (row: { nome: string }) => row.nome,
      id: "name",
      cell: (row: { nome: string }) => <>{row.nome}</>,
    },
    {
      name: "Ações",
      selector: (row: any) => row,
      id: "name",
      cell: (row: { id: string; nome: string }) => (
        <>
          <DrawerComponent
            iconOrTextOpenDrawer={
              <Tooltip title="Editar" placement="top">
                <MdEdit
                  color="#9d9d9d"
                  size={20}
                  onClick={() => setNome(row.nome)}
                />
              </Tooltip>
            }
            width={""}
            height={""}
            background={"transparent"}
            color={""}
            title={"Edit"}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <Form onSubmit={(e: any) => handleSubmit(e, row.id)}>
                  <Input
                    colorLabel={colorLabelDefault}
                    label={"Nome"}
                    htmlFor={"name"}
                    type={"text"}
                    placeholder="Digite aqui..."
                    value={nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setNome(e.target.value)
                    }
                  />

                  <Button
                    background={backgroundButtonAction}
                    title={"Editar"}
                    color={"#fff"}
                    width={"100%"}
                    height={"3rem"}
                    weight={600}
                    type="submit"
                    disabled={nome === ""}
                  />
                </Form>
              </>
            }
          />

          <Tooltip title="deletar" placement="top">
            <IconButton onClick={() => openDeleteModal(row.id)}>
              <MdDelete style={{ color: "rgba(234, 84, 85, 0.65)" }} />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  function openDeleteModal(id: string) {
    setOpenModalConfirmDeleteCategories(true);
    setCategoriaId(id);
  }

  async function GetListaCategoria() {
    return await handleApi.ListarCategorias().then((res) => {
      setCategorias(res);
    });
  }

  async function handleConfirmDeleteCategories() {
    setLoadingDelete(true);

    return await handleApi.ApagarCategoria(categoriaId).then((res) => {
      GetListaCategoria();
      setLoadingDelete(false);
      setOpenModalConfirmDeleteCategories(false);
      setCategoriaId("");
      toast.success("Categoria excluída com sucesso");
    });
  }

  useEffect(() => {
    // if (nome !== "") {
    //   setInvalid(false);
    // }

    GetListaCategoria();
  }, []);

  return (
    <>
      <TitlePage title="Categoria" />

      <PrincipalContainer>
        <div className="container-open-register">
          <DrawerComponent
            iconOrTextOpenDrawer={
              <div className="button-drawer">
                <span>Adicionar</span>
                <MdAdd />
              </div>
            }
            width={""}
            height={""}
            background={"transparent"}
            color={""}
            title={"Cadastrar"}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <Form onSubmit={(e: any) => handleSubmit(e)}>
                  <Input
                    colorLabel={colorLabelDefault}
                    label={"Nome"}
                    htmlFor={"name"}
                    type={"text"}
                    placeholder="Digite aqui..."
                    value={nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setNome(e.target.value)
                    }
                  />

                  <Button
                    background={backgroundButtonAction}
                    title={"Salvar"}
                    color={"#fff"}
                    width={"100%"}
                    height={"3rem"}
                    weight={600}
                    type="submit"
                    disabled={nome === ""}
                  />
                </Form>
              </>
            }
          />
        </div>

        <Table
          columns={columns}
          data={categorias}
          id="name"
          messageEmpty={
            loading ? (
              <Loading color={loadingTableDefault} size={20} />
            ) : (
              messages.alert.nullCategoria
            )
          }
        />
      </PrincipalContainer>

      <ModalComponent
        isOpen={openModalConfirmDeleteCategories}
        onRequestClose={() => setOpenModalConfirmDeleteCategories(false)}
        title={"Deletar categoria"}
        // eslint-disable-next-line react/no-children-prop
        children={
          <ContentConfirmActionModal
            description={"Deseja realizar mesmo essa ação ?"}
            small={"Essa ação não poderá ser desfeita"}
            onClickAction={() => handleConfirmDeleteCategories()}
            onClickCloseModal={() => setOpenModalConfirmDeleteCategories(false)}
            isLoading={loadingDelete}
          />
        }
      />
    </>
  );
};

export { Initial };
