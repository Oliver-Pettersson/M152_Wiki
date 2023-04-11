import {Typography} from "@mui/material";
import "./StatsCard.css"

function StatsCard(props: any) {
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 gap-16 h-fit pt-16 pb-16 text-center">
                <div
                    className="stat-card items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4 md:w-40 lg:w-60">
                    <Typography>
                        Customers inspired by us
                    </Typography>
                    <Typography sx={{fontSize: "2.5rem"}}>55K+</Typography>
                </div>
                <div
                    className="stat-card items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4 md:w-40 lg:w-60">
                    <Typography>
                        Many years of success
                    </Typography>
                    <Typography sx={{fontSize: "2.5rem"}}>12+</Typography>
                </div>
                <div
                    className="stat-card items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4  md:w-40 lg:w-60">
                    <Typography>
                        Experts for your experience
                    </Typography>
                    <Typography sx={{fontSize: "2.5rem"}}>4+</Typography>
                </div>
            </div>
        </>
    );
}

export default StatsCard;
