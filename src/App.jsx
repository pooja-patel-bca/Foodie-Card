import './App.css'
import FoodieCard from "./components/FoodieCard.jsx";
function App() {
 

  return (
    <div>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlquTUBCKz3tMEaMhSXUanE1i6VG-UdPIZYULN7VVfZw&s=10"  FavoriteFood="Litti Choka" StudentName="Kajal"/>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRJBxnITiWW6TDH33tGDU_g2Hpo1-WdilumflReBrgw&s=10"  FavoriteFood="Pav Bhaji" StudentName="Tammana"/>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh4PPGorbgrlr_IpfyAOSRe_aBRzNNg8ikpYnb0MFPQ&s=10"  FavoriteFood="Ghevar" StudentName="Suresh"/>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjD0qZE8xLdCVD_wyjzDlI2ZGpqI_9dH9-HIkaDNq0PQ&s=10"  FavoriteFood="Dal Bati Churma" StudentName="Rahul"/>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BYmQ_RXQvLAKxsrEuoh0WEvU3AB6Zn-zYqGZ5NIwtw&s=10"  FavoriteFood="Dhokhla" StudentName="Pooja"/>
      <FoodieCard FoodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLPZ_Cl9d1LqgP8yBmCxOdgyIjfRmCsZmUuK60DTtA&s=10"  FavoriteFood="Ice Cream" StudentName="Varsha"/>
    </div>
  )
}

export default App
