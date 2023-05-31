using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Infra.Data.Categoria
{
    public class CategoriaRepository : CategoriaAgg.ICategoriaRepository
    {
        private readonly WKTechContext context;

        public CategoriaRepository(WKTechContext context)
        {
            this.context = context;
        }

        public void Atualizar(CategoriaAgg.Categoria entity)
        {
            context.Set<CategoriaAgg.Categoria>().Update(entity);
        }

        public void Excluir(CategoriaAgg.Categoria entity)
        {
            context.Set<CategoriaAgg.Categoria>().Remove(entity);
        }

        public List<CategoriaAgg.Categoria> Lista()
        {
            return context.Set<CategoriaAgg.Categoria>().ToList();
        }

        public CategoriaAgg.Categoria Obter(Guid id)
        {
            return context.Set<CategoriaAgg.Categoria>().Where(c => c.Id == id).FirstOrDefault();
        }
        public CategoriaAgg.Categoria ObterPeloNome(string nome)
        {
            return context.Set<CategoriaAgg.Categoria>().Where(c => c.Nome == nome).FirstOrDefault();
        }

        public void Registrar(CategoriaAgg.Categoria entity)
        {
            context.Set<CategoriaAgg.Categoria>().Add(entity);
        }
    }
}
