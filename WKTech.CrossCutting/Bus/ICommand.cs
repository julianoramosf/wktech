using MediatR;

namespace WKTech.CrossCutting.Bus.Command
{
    public interface ICommand<T> : IRequest<T>
    {
    }
}
