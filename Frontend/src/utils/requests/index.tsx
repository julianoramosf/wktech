import { openApi } from '../../services/openApi'
import { endpoints } from '../endpoint'



const ListarCategorias = async () => {
  try {
    const url = endpoints.categoria.base;

    const response = await openApi.get(url);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}

const ApagarCategoria = async (id: string) => {
  try {
    const url = endpoints.categoria.base;

    let payload = {
      id: id
    }

    const response = await openApi.delete(url, { data: payload });

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}




const CadastrarCategoria = async (payload: any) => {
  try {
    const url = endpoints.categoria.base;

    const response = await openApi.post(url, payload);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}

const EditarCategoria = async (payload: any) => {
  try {
    const url = endpoints.categoria.base;

    const response = await openApi.put(url, payload);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}


const ListarProdutos = async () => {
  try {
    const url = endpoints.produto.base;

    const response = await openApi.get(url);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}


const CadastrarProduto = async (payload: any) => {
  try {
    const url = endpoints.produto.base;

    const response = await openApi.post(url, payload);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}

const EditarProduto = async (payload: any) => {
  try {
    const url = endpoints.produto.base;

    const response = await openApi.put(url, payload);

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}


const ApagarProduto = async (id: string) => {
  try {
    const url = endpoints.produto.base;

    let payload = {
      id: id
    }

    const response = await openApi.delete(url, { data: payload });

    if (response.data.isError) {
      throw new Error(response.data.message)
    }

    return response.data.result;
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const handleApi = {
  ListarCategorias,
  CadastrarCategoria,
  ApagarCategoria,
  EditarCategoria,
  ListarProdutos,
  ApagarProduto,
  CadastrarProduto, EditarProduto
}
