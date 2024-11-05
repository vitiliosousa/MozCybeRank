'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Header from "@/components/header";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function TeamRegistration() {
    const router = useRouter(); // Initialize the router
    const [teamName, setTeamName] = useState('');
    const [teamLeader, setTeamLeader] = useState('');
    const [teamMember1, setTeamMember1] = useState('');
    const [teamMember2, setTeamMember2] = useState('');

    const handleSubmit = async () => {
        const teamData = {
            team_name: teamName,
            team_leader: teamLeader,
            team_member1: teamMember1,
            team_member2: teamMember2,
        };

        try {
            const response = await fetch('http://localhost:3001/teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(teamData),
            });

            if (response.ok) {
                alert('Team registered successfully');
                router.push('/'); // Redirect to the homepage
            } else {
                const errorText = await response.text();
                alert(`Error registering team: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to register team');
        }
    };

    return (
        <div className="bg-black min-h-screen w-full sm:p-16 p-4 text-dark flex flex-col sm:text-2xl gap-10">
            <Header />
            <div className="space-y-2 sm:w-96">
                <h1 className="sm:text-3xl text-light">Team Registration</h1>
                <Input label="Team Name" type="text" onChange={(e) => setTeamName(e.target.value)} />
                <Input label="Team Leader" type="text" onChange={(e) => setTeamLeader(e.target.value)} />
                <Input label="Team Member 1" type="text" onChange={(e) => setTeamMember1(e.target.value)} />
                <Input label="Team Member 2" type="text" onChange={(e) => setTeamMember2(e.target.value)} />
                <Button text="Submit" onClick={handleSubmit} />
            </div>
        </div>
    );
}
