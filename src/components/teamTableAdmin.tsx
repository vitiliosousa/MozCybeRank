import React, { useState } from 'react';
import data from './data.json';

interface Team {
  rank: number;
  team: string;
  pontos: number;
  membros: string[];
}

const AdminTable: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(data.teams);

  const handleInputChange = (index: number, field: keyof Team, value: string) => {
    setTeams((prevTeams) => {
      const updatedTeams = [...prevTeams];

      if (field === 'membros') {
        updatedTeams[index][field] = value.split(',').map((item) => item.trim());
      } else {
        updatedTeams[index][field] = value as any;
      }

      return updatedTeams;
    });
  };

  const handleSave = () => {
    console.log("Dados salvos:", teams);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <table className="table-auto border-collapse border-2 border-dashed border-dark w-full">
        <thead className="text-light">
          <tr>
            <th className="border-2 border-dashed border-dark p-4 text-center">Rank</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Team</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Membros</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                <input
                  type="number"
                  value={team.rank}
                  onChange={(e) => handleInputChange(index, 'rank', e.target.value)}
                  className="bg-transparent border-2 border-dashed border-dark text-center"
                />
              </td>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                <input
                  type="text"
                  value={team.team}
                  onChange={(e) => handleInputChange(index, 'team', e.target.value)}
                  className="bg-transparent border-2 border-dashed border-dark text-center"
                />
              </td>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                <input
                  type="text"
                  value={team.membros.join(', ')}
                  onChange={(e) => handleInputChange(index, 'membros', e.target.value)}
                  className="bg-transparent border-2 border-dashed border-dark text-center"
                />
              </td>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                <input
                  type="number"
                  value={team.pontos}
                  onChange={(e) => handleInputChange(index, 'pontos', e.target.value)}
                  className="bg-transparent border-2 border-dashed border-dark text-center"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 border-2 border-dashed border-dark bg-dark text-light hover:bg-light hover:text-dark transition-colors"
      >
        Salvar Alterações
      </button>
    </div>
  );
};

export default AdminTable;
