using WKTech.Domain.CategoriaAggregate;
using WKTech.Domain.Core.Model;
using System;
using System.Reflection.Metadata;

namespace WKTech.Domain.ProdutoAggregate
{
    public class Produto : Entity
    {
        
        public string Descricao { get; private set; }
        public string Nome { get; private set; }
        public decimal Preco { get; private set; }

        public Guid CategoriaId { get; set; }
        public Categoria Categoria { get; set; }

        private Produto() { }

        public Produto(string nome, string descricao, Categoria categoria, decimal preco)
        {
            Id = Guid.NewGuid();
            Nome = nome ?? throw new ArgumentNullException(nameof(nome));
            Descricao = descricao ?? throw new ArgumentNullException(nameof(descricao));
            Preco = preco;
            Categoria = categoria;
        }

        public void Atualizar(string nome, string descricao, Categoria categoria, decimal preco){

            if(!string.IsNullOrEmpty(nome) && nome != Nome)
                Nome = nome;

            if (!string.IsNullOrEmpty(descricao) && descricao != Descricao)
                Descricao = descricao;

            if (preco != Preco)
                Preco = preco;

            if (categoria != Categoria)
                Categoria = categoria;
        }

    }
}
