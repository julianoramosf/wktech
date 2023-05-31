using System;
using System.Collections.Generic;
using System.Text;
using WKTech.Application.Categoria.Query.ObterCategoria;

namespace WKTech.Application.Produto.Query.ObterProduto
{
    public class ObterProdutoViewModel
    {
        public Guid Id { get; set; }
        public ObterCategoriaViewModel Categoria { get; set; }
        public decimal Preco { get; set; }
        public string Descricao { get; set; }
        public string Nome { get; set; }
        public int Situacao { get; set; }
    }
}
