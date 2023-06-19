import React from 'react';

type PokemonStatsProps = {
    stats: {stat: {name: string}, base_stat: number}[];
    getStatBar: (value: number) => JSX.Element;
  };
  
const PokemonStats: React.FC<PokemonStatsProps> = ({ stats, getStatBar }) => (
<table>
    <tbody>
    {stats.map((stat) => (
        <tr key={stat.stat.name}>
        <td>{(stat.stat.name === 'hp') ? 'HP': stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</td>
        <td>{stat.base_stat}</td>
        <td>{getStatBar(stat.base_stat)}</td>
        </tr>
    ))}
    </tbody>
</table>
);

export default PokemonStats;
  