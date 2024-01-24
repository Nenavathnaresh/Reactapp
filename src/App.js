import logo from './logo.svg';
import './App.css';
import Studentregistration from './StudentRegistration';
import StudentregistrationYup from './StudentRegistrationYup';
import StudentRegGFP from './StudentgetFieldProps';
import StudentRegFormikComp from './StudentRegFormikComp';

function App() {
  return (
    <div>
    <Studentregistration></Studentregistration>
    <StudentregistrationYup></StudentregistrationYup>
    <StudentRegGFP></StudentRegGFP>
    <StudentRegFormikComp></StudentRegFormikComp>
    </div>
  );
}

export default App;
