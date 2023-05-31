using WKTech.Domain.Core.Model;
using System;
using System.Collections.Generic;

namespace WKTech.Domain.CategoriaAggregate
{
    public class Categoria : Entity
    {
        public string Nome { get; set; }

        public virtual ICollection<ProdutoAggregate.Produto> Produtos { get; set; }

        public Categoria() { }

        public Categoria(string nome)
        {
            Id = Guid.NewGuid();
            Nome = nome ?? throw new ArgumentNullException(nameof(nome));
        }

    }
}
