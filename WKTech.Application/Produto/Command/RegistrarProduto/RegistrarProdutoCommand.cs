using MediatR;
using System;

namespace WKTech.Application.Produto.Command.RegistrarProduto
{
    public class RegistrarProdutoCommand : IRequest<bool>
    {
        public string Nome { get; set; }
        public Guid Categoria { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
    }
}
