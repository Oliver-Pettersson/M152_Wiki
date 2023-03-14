import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Typography } from "@mui/material";

function StatsCard(props: any) {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 gap-16 h-fit pt-32 text-center">
        <div className="items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4 w-60">
          <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </Typography>
          <Typography sx={{fontSize: "2.5rem" }}>55K+</Typography>
        </div>
        <div className="items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4 w-60">
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </Typography>
          <Typography sx={{fontSize: "2.5rem" }}>12K+</Typography>
        </div>
        <div className="items-center flex flex-col border-t-4 border-[#62DB44] px-3 pt-4 w-60">
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography sx={{fontSize: "2.5rem" }}>20K+</Typography>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
