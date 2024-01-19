
import { ContactsList, Filter, FormAddContacts } from "components";


export const App = () => {
 
  return (
    <div className="phone_book">
      <h1>Phone Book</h1>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList/>
    </div>
  );
};
