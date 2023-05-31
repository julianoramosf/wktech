using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Diagnostics;
using System.Reflection.Emit;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;

namespace WKTech.Infra.Data.Produto
{
    public class CategoriaConfiguration : IEntityTypeConfiguration<CategoriaAgg.Categoria>
    {
        public void Configure(EntityTypeBuilder<CategoriaAgg.Categoria> builder)
        {
            builder.ToTable("Categoria");
            builder.HasKey(x => x.Id);
            builder.HasMany(x => x.Produtos).WithOne(x => x.Categoria);
            builder.HasMany<ProdutoAgg.Produto>(g => g.Produtos).WithOne(s => s.Categoria).HasForeignKey(s => s.CategoriaId);
        }
    }
}
