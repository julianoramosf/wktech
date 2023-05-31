using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Diagnostics;
using System.Reflection.Emit;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Infra.Data.Produto
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<ProdutoAgg.Produto>
    {
        public void Configure(EntityTypeBuilder<ProdutoAgg.Produto> builder)
        {
            builder.ToTable("Produto");
            builder.HasKey(x => x.Id);
            builder.Property(x=> x.Preco).HasPrecision(18,4);
            builder.HasOne(s => s.Categoria).WithMany(c => c.Produtos).HasForeignKey(c => c.Id).HasPrincipalKey(p => p.Id);            
        }
    }
}
