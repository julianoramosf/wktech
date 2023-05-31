﻿using MediatR;
using WKTech.Domain.Core;
using WKTech.Infra.Data.UoW;
using System.Collections.Generic;
using System.Linq;

namespace WKTech.Application
{
    public abstract class CommandHandler
    {
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _uow;

        public CommandHandler(IUnitOfWork uow, IMediator mediator)
        {
            this._mediator = mediator;
            _uow = uow;
        }

        public bool Commit()
        {
            if (_uow.Commit()) return true;

            return false;
        }

        public void PublishEvents(IList<Event> events)
        {
            events.ToList().ForEach(e => _mediator.Publish(e));
        }
    }
}
