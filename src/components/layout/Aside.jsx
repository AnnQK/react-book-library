import React from 'react';
import Navigation from '../Navigation';
import Notifications from '../Notifications';
import TagsList from '../TagsList';
import AddButton from '../AddBook/AddButton';

function Aside() {
  return (
    <aside className="main__aside">
      <div className="aside__btn">
        <AddButton />
      </div>
      <Navigation />
      <TagsList />
      <Notifications />
    </aside>
  );
}

export default Aside;
