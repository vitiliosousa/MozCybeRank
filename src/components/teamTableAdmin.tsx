import React from 'react';
import data from './data.json';

interface Team {
  rank: number;
  team: string;
  pontos: number;
  membros: string[];
}

const DataTable: React.FC = () => {
  return (
    <div className='w-full flex justify-center'>
      <table className="table-auto border-collapse border-2 border-dashed border-dark w-full">
        <thead className='text-light'>
          <tr>
            <th className="border-2 border-dashed border-dark p-4 text-center">Rank</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Team</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Membros</th>
            <th className="border-2 border-dashed border-dark p-4 text-center">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {data.teams.map((team: Team, index: number) => (
            <tr key={index}>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                {team.rank}
                </td>
              <td className="border-2 border-dashed border-dark p-4 text-center">{team.team}</td>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                {team.membros.join(' + ')}
              </td>
              <td className="border-2 border-dashed border-dark p-4 text-center">
                <input type="text" value={team.pontos} className='bg-transparent border-2 border-dashed border-dark'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
