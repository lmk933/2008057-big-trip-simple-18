import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventNewFormView from '../view/event-new-form.js';
import {render} from '../render.js';
import EventView from '../view/event-view.js';

export default class EventsPresenter {
  eventListComponent = new EventListView();

  init = (eventsContainer) => {
    this.eventsContainer = eventsContainer;
    render(new SortView(), this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);
    render(new EventNewFormView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
  };
}
