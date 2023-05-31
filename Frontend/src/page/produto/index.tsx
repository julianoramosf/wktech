import { ChangeEvent, FC, useEffect, useState } from 'react'
import { TitlePage } from '../../components/titlePage/titlePage'
import { DrawerComponent } from '../../components/drawer/drawer'
import { Form, PrincipalContainer } from './style'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import { Table } from '../../components/table/table'
import { IColumnsView } from '../../utils/interfaces/components/table'
import { Input } from '../../components/form/input'
import {
  backgroundButtonAction,
  colorLabelDefault,
  loadingTableDefault,
} from '../../style/global'
import { Button } from '../../components/form/button'
import { useControlDrawer } from '../../context/controlDrawer'
import { IconButton, Tooltip } from '@mui/material'
import { messages } from '../../helpers/messages'
import { Loading } from '../../components/loading/loading'
import { handleApi } from '../../utils/requests'
import { Select } from '../../components/form/select'
import { toast } from 'react-toastify'
import { ModalComponent } from '../../components/modal/modal'
import { ContentConfirmActionModal } from '../../components/modal/contents/confirmActionModal'

const Produto: FC = () => {
  
  const [nome, setNome] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [preco, setPreco] = useState<number>(0)
  const [categoria, setCategoria] = useState<string>('')

  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [
    openModalConfirmDeleteProdutos,
    setOpenModalConfirmDeleteProdutos,
  ] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false);
  const {setControlDrawer } = useControlDrawer()
  const [produtos, setProdutos] = useState<any>([])
  const [listCategorias, setListCategorias] = useState<any>([]);

  const [produtoId, setProdutoId] = useState<string>("");

  function resetParameters() {
    setNome('')
    setDescricao('')
    setPreco(0)
    setCategoria('')
  } 

  const handleSubmit = async (e?: ChangeEvent, id?: string) => {
    e?.preventDefault();

    if (nome === "") {
      setInvalid(true);
    } else {
      let payload: any = {
        nome,
        categoria,
        descricao,
        preco
      };

      if (id) {
        payload.id = id;
        await handleApi.EditarProduto(payload).then(() => {
          toast.success("Produto editado com sucesso");
        });
      } else {
        await handleApi.CadastrarProduto(payload).then(() => {
          toast.success("Produto cadastrado com sucesso");
      
        });
      }

      GetListaProduto();
      resetParameters();
      setControlDrawer(false);
      setLoading(false)
    }
  };



  const columns: IColumnsView[] = [
    {
      name: 'id',
      selector: (row: { id: string }) => row.id,
      cell: (row: { id: string }) => <span>{row.id}</span>,
    },
    {
      name: 'Nome',
      selector: (row: { nome: string }) => row.nome,
      id: 'nome',
      cell: (row: { nome: string }) => <>{row.nome}</>,
    },
    {
      name: 'Descrição',
      selector: (row: { descricao: string }) => row.descricao,
      id: 'descricao',
      cell: (row: { descricao: string }) => <>{row.descricao}</>,
    },
    {
      name: 'Preço',
      selector: (row: { preco: number }) => row.preco,
      id: 'preco',
      cell: (row: { preco: number }) => <>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.preco) }</>,
    },
    {
      name: 'Categoria',
      selector: (row: { categoria: any }) => row.categoria,
      id: 'categoria',
      cell: (row: { categoria: any }) => <>{row.categoria.nome}</>,
    },
    {
      name: 'Ações',
      selector: (row: any) => row,
      id: 'name',
      cell: (row: { nome: string, id: string, descricao: string, preco: number, categoria: any }) => (
        <>
          <DrawerComponent
            iconOrTextOpenDrawer={
              <Tooltip title="Editar" placement="top">
                <MdEdit color="#9d9d9d" size={20} onClick={()=>{

                  console.log(row.categoria); 
                  setNome(row.nome);
                  setDescricao(row.descricao);
                  setPreco(row.preco);
                  setCategoria(row.categoria.id);
                }} />
              </Tooltip>
            }
            width={''}
            height={''}
            background={'transparent'}
            color={''}
            title={'Edit'}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <Form onSubmit={(e: any) => handleSubmit(e, String(row.id))}>
                <div className='formdata'>
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
                    <Input
                      colorLabel={colorLabelDefault}
                      label={"Descrição"}
                      htmlFor={"descricao"}
                      type={"text"}
                      placeholder="Digite aqui..."
                      value={descricao}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setDescricao(e.target.value)
                      }
                    />
                    <Input
                      colorLabel={colorLabelDefault}
                      label={"Preço"}
                      htmlFor={"preco"}
                      type={"number"}
                      step=".10"
                      placeholder="Digite aqui..."
                      value={String(preco)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPreco(Number(e.target.value))
                      }
                    />

                    <Select
                      label={"Categoria"}
                      htmlFor={""}
                      colorLabel={colorLabelDefault}
                      value={categoria}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setCategoria(e.target.value)
                      }
                    >
                      <option value="*">Selecione</option>
                      {listCategorias?.map((item: any) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nome}
                  </option>
                )
              })}
                    </Select>
                  </div>

                  <Button
                    background={backgroundButtonAction}
                    title={'Editar'}
                    color={'#fff'}
                    width={'100%'}
                    height={'3rem'}
                    weight={600}
                    type="submit"
                    disabled={false}
                  />
                </Form>
              </>
            }
          />

          <Tooltip title="deletar" placement="top">
            <IconButton onClick={() => openDeleteModal(row.id)}>
              <MdDelete style={{ color: 'rgba(234, 84, 85, 0.65)' }} />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ]


  async function GetListaProduto() {
    return await handleApi.ListarProdutos().then((res)=>{
      setProdutos(res);
    });
  } 

  async function GetListaCategoria() {
    return await handleApi.ListarCategorias().then((res) => {
      setListCategorias(res);
    });
  }

  function openDeleteModal(id: string) {
    setOpenModalConfirmDeleteProdutos(true);
    setProdutoId(id);
  }

  async function handleConfirmDeleteCategories() {
    setLoadingDelete(true);

    return await handleApi.ApagarProduto(produtoId).then((res) => {
      GetListaProduto();
      setLoadingDelete(false);
      setOpenModalConfirmDeleteProdutos(false);
      setProdutoId("");
      toast.success("Produto excluído com sucesso");
    });
  }

  useEffect(() => {
    GetListaProduto();
    GetListaCategoria();
  }, [])

  return (
    <>
      <TitlePage title="Produto" />

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
                  <div className='formdata'>
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
                    <Input
                      colorLabel={colorLabelDefault}
                      label={"Descrição"}
                      htmlFor={"descricao"}
                      type={"text"}
                      placeholder="Digite aqui..."
                      value={descricao}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setDescricao(e.target.value)
                      }
                    />
                    <Input
                      colorLabel={colorLabelDefault}
                      label={"Preço"}
                      htmlFor={"preco"}
                      type={"number"}
                      step=".10"
                      placeholder="Digite aqui..."
                      value={String(preco)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPreco(Number(e.target.value))
                      }
                    />

                    <Select
                      label={"Categoria"}
                      htmlFor={""}
                      colorLabel={colorLabelDefault}
                      value={categoria}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setCategoria(e.target.value)
                      }
                    >
                      <option value="*">Selecione</option>
                      {listCategorias?.map((item: any) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nome}
                  </option>
                )
              })}
                    </Select>
                  </div>
                  <Button
                    background={backgroundButtonAction}
                    title={"Salvar"}
                    color={"#fff"}
                    width={"100%"}
                    height={"3rem"}
                    weight={600}
                    type="submit"
                    disabled={false}
                  />
                </Form>
              </>
            }
          />
        </div>

        <Table
          columns={columns}
          data={produtos}
          id="name"
          messageEmpty={
            loading ? (
              <Loading color={loadingTableDefault} size={20} />
            ) : (
              messages.alert.nullProduto
            )
          }
        />
      </PrincipalContainer>

      <ModalComponent
        isOpen={openModalConfirmDeleteProdutos}
        onRequestClose={() => setOpenModalConfirmDeleteProdutos(false)}
        title={'Deletar produto'}
        // eslint-disable-next-line react/no-children-prop
        children={
          <ContentConfirmActionModal
            description={'Deseja realizar mesmo essa ação ?'}
            small={'Essa ação não poderá ser desfeita'}
            onClickAction={() => handleConfirmDeleteCategories()}
            onClickCloseModal={() => setOpenModalConfirmDeleteProdutos(false)}
            isLoading={loadingDelete}
          />
        }
      />
    </>
  );
}

export { Produto }
