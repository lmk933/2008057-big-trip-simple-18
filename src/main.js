import { render } from './render';
import FilterView from './view/filter-view';
import EventsPresenter from './presenter/events-presenter';

const filtersContainer = document.querySelector('.trip-controls__filters');
render(new FilterView, filtersContainer);

const eventsContainer = document.querySelector('.trip-events');
new EventsPresenter().init(eventsContainer);
