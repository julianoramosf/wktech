using System;
using System.Collections.Generic;

namespace WKTech.Domain.ProdutoAggregate
{
    public interface IProdutoRepository
    {
        Produto Obter(Guid id);
        void Registrar(Produto entity);
        void Atualizar(Produto entity);
        void Excluir(Produto entity);
        List<Produto> Lista();

    }
}
