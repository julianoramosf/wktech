using System;
using System.Collections.Generic;
using System.Linq;

namespace WKTech.Domain.CategoriaAggregate
{
    public interface ICategoriaRepository
    {
        Categoria Obter(Guid id);
        Categoria ObterPeloNome(string nome);
        void Registrar(Categoria entity);
        void Atualizar(Categoria entity);
        void Excluir(Categoria entity);
        List<Categoria> Lista();
    }
}
