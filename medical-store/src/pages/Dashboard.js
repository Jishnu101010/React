import Navbar from "../components/Navbar";
import MedicineForm from "../components/MedicineForm";
import MedicineList from "../components/MedicineList";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <MedicineForm />
      <MedicineList />
    </div>
  );
}

export default Dashboard;

