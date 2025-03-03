import './App.css'
import { useState, useEffect } from "react";
import teamsData from "./CollegeBasketballTeams.json"; // Import JSON directly


function Header() {
  return (
    <header className="text-center p-5 bg-blue-500 text-white text-2xl font-bold">
      NCAA Basketball Teams
    </header>
  );
}

function TeamCard({school, name, city, state}: {school: string; name: string; city: string; state: string;}) { // Properties
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

function TeamList() {
  const [teams, setTeams] = useState<{ school: string; name: string; city: string; state: string }[]>([]);

  useEffect(() => {
    setTeams(teamsData.teams); // Load data directly from imported JSON
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-5">
      {teams.map((team) => (
        <TeamCard key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return(
    <>
      <Header />
      <TeamList />
    </>
  )
  
}

export default App
