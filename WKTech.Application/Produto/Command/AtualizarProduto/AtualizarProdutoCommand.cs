using MediatR;
using System;

namespace WKTech.Application.Produto.Command.AtualizarProduto
{
    public class AtualizarProdutoCommand : IRequest<bool>
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public Guid Categoria { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
    }
}
