import CurrentTime from "../currentTime";
import TeamTable from "../teamTable";

export default function Rank() {
 
    return (
        <div className="space-y-4 w-full sm:px-20">
            <CurrentTime/>
            <TeamTable/>
        </div>
    );
}
