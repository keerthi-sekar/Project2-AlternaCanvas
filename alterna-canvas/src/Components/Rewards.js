import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import YardIcon from '@mui/icons-material/Yard';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import HikingIcon from '@mui/icons-material/Hiking';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import './Rewards.css';

function Rewards() {
  return (
    <div>
      <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes" />
          <title>AlternaCanvas</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      </Helmet>
      <body>  
        <div className="main-content">
          <h1>Rewards Dashboard</h1>
          <br></br>
          <h4> You've worked hard this semester! Look at all the badges you secured so far.</h4>
          <br></br>
          <h4>User Interface</h4>
          <div className="flex-container">
            <div>
              <FitnessCenterIcon fontSize = "large"></FitnessCenterIcon>
              <p>Weekend Warrior</p>
            </div>
            <div>
              <PsychologyIcon fontSize = "large"></PsychologyIcon>
              <p>Strategist</p>
            </div>
            <div>
            <YardIcon fontSize = "large"></YardIcon>
              <p>Growth</p>  
            </div>  
            <div>
              <DirectionsRunIcon fontSize="large"></DirectionsRunIcon>
              <p>Speed Coder</p>
            </div>
            <div>?</div>
            <div>?</div>  
            <div>?</div>
            <div>?</div>
          </div>
          <br></br>
          <h4>Computer Graphics</h4>
          <div className="flex-container">
            <div>
              <WhatshotIcon fontSize="large"></WhatshotIcon>
              <p>Wildfire</p>
            </div>
            <div>
              <MilitaryTechIcon fontSize="large"></MilitaryTechIcon>
              <p>High Rank</p>
            </div>
            <div>
              <FavoriteIcon fontSize="large"></FavoriteIcon>
              <p>Friendly Classmate</p>
            </div>  
            <div>
              <StarIcon fontSize="large"></StarIcon>
              <p>Top Scorer</p>
            </div>
            <div>
              <HikingIcon fontSize="large"></HikingIcon>
              <p>Perseverer</p>
            </div>
            <div>?</div>  
            <div>?</div>
            <div>?</div>
          </div>
          <br></br>
          <h4>Senior Design</h4>
          <div className="flex-container">
            <div>
              <AccessTimeIcon fontSize="large"></AccessTimeIcon>
              <p>Overtime</p>
            </div>
            <div>
              <CoPresentIcon fontSize="large"></CoPresentIcon>
              <p>Lead Presenter</p>
            </div>
            <div>
              <Diversity3Icon fontSize="large"></Diversity3Icon>  
              <p>Teamwork</p>
            </div>  
            <div>?</div>
            <div>?</div>
            <div>?</div>  
            <div>?</div>
            <div>?</div>
          </div>
          <br></br>
          <h4>  Keep going, you got this! </h4>

        </div>
      </body>
    </div>
  );
}
export default Rewards;