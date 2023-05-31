using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;

namespace WKTech.Infra.Data.Produto
{
    public class ProdutoRepository : ProdutoAgg.IProdutoRepository
    {
        private readonly WKTechContext context;

        public ProdutoRepository(WKTechContext context)  {
            this.context = context;
        }

        public void Atualizar(ProdutoAgg.Produto entity)
        {
            context.Set<ProdutoAgg.Produto>().Update(entity);
        }

        public void Excluir(ProdutoAgg.Produto entity)
        {
            context.Set<ProdutoAgg.Produto>().Remove(entity);
        }

        public List<ProdutoAgg.Produto> Lista()
        {
            return context.Set<ProdutoAgg.Produto>().Include(x=> x.Categoria).OrderBy(x=> x.Nome).ToList();
        }

        public ProdutoAgg.Produto Obter(Guid id)
        {
            return context.Set<ProdutoAgg.Produto>().Where(c=> c.Id == id).Include(x => x.Categoria).FirstOrDefault();
        }

        public void Registrar(ProdutoAgg.Produto entity)
        {
            context.Set<ProdutoAgg.Produto>().Add(entity);
        }
    }
}
