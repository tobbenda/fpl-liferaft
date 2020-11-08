import './Main.css';
import SettingsBox from './components/SettingsBox/SettingsBox';
import DataBox from './components/DataBox/DataBox';
import React from 'react';
import cover from './fpl-cover-foto-01.jpg';
import cover_cropped from './fpl-cover-cropped.jpg';

// const sortOptions_raw = [
//   { attributeID: "web_name", prettyName: "Short Name", checked: true },
//   { attributeID: "total_points", prettyName: "Total Points", checked: true },
//   { attributeID: "first_name", prettyName: "First name", checked: false },
//   { attributeID: "second_name", prettyName: "Second name", checked: true },
//   { attributeID: "assists", prettyName: "Assists", checked: false },
//   { attributeID: "bonus", prettyName: "Bonus Points", checked: false },
//   { attributeID: "bps", prettyName: "Bonus points understats", checked: false },
//   { attributeID: "clean_sheets", prettyName: "Clean sheets", checked: true },
//   { attributeID: "now_cost", prettyName: "Current Price", checked: true },
//   { attributeID: "form", prettyName: "Form", checked: false },
//   { attributeID: "transfers_in_event", prettyName: "GW transfers in", checked: false },
//   { attributeID: "transfers_out_event", prettyName: "GW trannsfers out", checked: false },
//   { attributeID: "goals_scored", prettyName: "Goals scored", checked: false },
//   { attributeID: "cost_change_start", prettyName: "Total price change", checked: false },
//   { attributeID: "points_per_game", prettyName: "Points pr game", checked: true },
//   { attributeID: "selected_by_percent", prettyName: "Selected by percent", checked: false },
//   { attributeID: "status", prettyName: "Status", checked: false },
//   { attributeID: "value_form", prettyName: "Value form (?)", checked: false },
//   { attributeID: "event_points", prettyName: "Points last GW", checked: true },
//   { attributeID: "value_season", prettyName: "Value season (?)", checked: false },
//   { attributeID: "minutes", prettyName: "Minutes playedd", checked: false },
//   { attributeID: "news", prettyName: "News", checked: false },
//   { attributeID: "news_added", prettyName: "News added", checked: false },
//   { attributeID: "goals_conceded", prettyName: "Goals conceded", checked: false },
//   { attributeID: "own_goals", prettyName: "Own goals", checked: false },
//   { attributeID: "penalties_saved", prettyName: "Penalties saved", checked: false },
//   { attributeID: "penalties_missed", prettyName: "Penaltes missed", checked: false },
//   { attributeID: "yellow_cards", prettyName: "Yellow cards", checked: false },
//   { attributeID: "red_cards", prettyName: "Red cards", checked: false },
//   { attributeID: "saves", prettyName: "Saves (Goalkeeper)", checked: false },
//   { attributeID: "influence", prettyName: "Influence", checked: false },
//   { attributeID: "creativity", prettyName: "Creativity", checked: false },
//   { attributeID: "threat", prettyName: "Threat", checked: false },
//   { attributeID: "ict_index", prettyName: "ICT-Index", checked: false },
//   { attributeID: "influence_rank", prettyName: "Influence rank", checked: false },
//   { attributeID: "influence_rank_type", prettyName: "Influence rank position", checked: false },
//   { attributeID: "creativity_rank", prettyName: "Creativity rank", checked: false },
//   { attributeID: "creativity_rank_type", prettyName: "Creativity rank position", checked: false },
//   { attributeID: "threat_rank", prettyName: "Threat rank", checked: false },
//   { attributeID: "threat_rank_type", prettyName: "Threat rank position", checked: false },
//   { attributeID: "ict_index_rank", prettyName: "ICT rank", checked: false },
//   { attributeID: "ict_index_rank_type", prettyName: "ICT rank position", checked: false },
//   { attributeID: "corners_and_indirect_freekicks_order", prettyName: "corners order(?)", checked: false },
//   { attributeID: "direct_freekicks_order", prettyName: "freekicks order(?)", checked: false },
//   { attributeID: "penalties_order", prettyName: "penalties_order", checked: false },
//   { attributeID: "points_pr_mill", prettyName: "Points pr mill", checked: true },
//   { attributeID: "points_pr_game_pr_mill", prettyName: "Points pr game pr mill", checked: true },
//   { attributeID: "team_name", prettyName: "Team", checked: true },
//   { attributeID: "position", prettyName: "Position", checked: true },
// ]



function Main() {


   return (
      <div className="Main">
        <img className="cover-img-cropped" alt='football players' src={cover_cropped}></img>
        <img className="cover-img" alt='football players' src={cover}></img>
        <SettingsBox />
        <DataBox />
      </div>
  );
}

export default Main;
