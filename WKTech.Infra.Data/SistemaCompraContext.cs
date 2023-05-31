using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WKTech.Domain.Core;
using WKTech.Infra.Data.Produto;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Infra.Data
{
    public class WKTechContext : DbContext
    {
        public static readonly ILoggerFactory loggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public WKTechContext(DbContextOptions options) : base(options) { }
        public DbSet<ProdutoAgg.Produto> Produtos { get; set; }
        public DbSet<CategoriaAgg.Categoria> Categorias { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<Event>();

            

            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new CategoriaConfiguration());
            modelBuilder.Entity<CategoriaAgg.Categoria>().HasMany(e => e.Produtos).WithOne(e => e.Categoria).HasForeignKey("CategoriaId").HasPrincipalKey(x=> x.Id);
                        //modelBuilder.Entity<ProdutoAgg.Produto>().HasOne(e => e.Categoria).WithOne() ;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseLoggerFactory(loggerFactory)
                .EnableSensitiveDataLogging()
                .UseMySql("Server=localhost;User Id=root;Password=pass;Database=teste", new MySqlServerVersion(new Version(8, 0, 11)));
            }
        }
    }
}
