using MediatR;
using System;

namespace WKTech.Domain.Core
{
    public abstract class Event : INotification
    {
        public DateTime DataOcorrencia => DateTime.Now;
    }
}
