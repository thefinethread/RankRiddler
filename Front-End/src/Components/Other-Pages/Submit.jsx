import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitActions } from '../store/SubmitSlice';
import API from '../../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Submit() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.submit.game);
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };

  const handleGameChange = (event) => {
    dispatch(submitActions.setGame(event.target.value));
  };

  return (
    <>
      <div className="submit-game">
        <div className="back-submit">
          <button
            style={{
              padding: '10px',
              backgroundColor: '#2d3436',
              color: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={home}
          >
            Home
          </button>
        </div>
        <h1 style={{ color: 'white' }}>Submit a Clip</h1>
        <select className="select" value={game} onChange={handleGameChange}>
          <option value="">-- Select a game --</option>
          <option value="lol">League of Legends</option>
          <option value="val">Valorant</option>
          <option value="csgo">CS:GO</option>
          <option value="apex">Apex Legends</option>
          <option value="rainbow">Rainbow Six</option>
          <option value="overwatch">Overwatch</option>
          <option value="rocket">Rocket League</option>
          <option value="fortnite">Fortnite</option>
        </select>
        {game === 'lol' && <Form game="league" />}
        {game === 'val' && <Form game="val" />}
        {game === 'csgo' && <Form game="csgo" />}
        {game === 'apex' && <Form game="apex" />}
        {game === 'rainbow' && <Form game="rainbow" />}
        {game === 'overwatch' && <Form game="overwatch" />}
        {game === 'rocket' && <Form game="rocket" />}
        {game === 'fortnite' && <Form game="fortnite" />}
      </div>
      <div className="text">
        Clips must be submitted in the following format or will be{' '}
        <span style={{ color: 'red' }}>REJECTED</span>
        <ul className="submission-list">
          <li>Must be from a ranked match</li>
          <li>Must Submit Clips from Youtube Only</li>
          <li>At least be 720p</li>
        </ul>
      </div>
    </>
  );
}

function Form(props) {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [playerInfo, setPlayerInfo] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isYoutubeLinkValid, setIsYoutubeLinkValid] = useState(true);

  const validateYoutubeLink = (url) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
  };

  const handleYoutubeLinkChange = (event) => {
    const url = event.target.value;
    setYoutubeLink(url);
    setIsYoutubeLinkValid(validateYoutubeLink(url)); // Validate the link on change
  };

  const handlePlayerInfoChange = (event) => {
    setPlayerInfo(event.target.value);
  };

  const handleRankChange = (event) => {
    setSelectedRank(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isYoutubeLinkValid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid YouTube link!',
      });
      return;
    }

    const formData = {
      youtubeLink: youtubeLink,
      playerInfo: playerInfo,
      rank: selectedRank,
    };

    try {
      const response = await fetch(`${API.GameSubmit}/${props.game}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      }
    } catch (error) {
      alert('Error submitting form. Please try again later.');
    }
  };

  const gameOptions = {
    league: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Iron', label: 'Iron' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Master', label: 'Master' },
        { value: 'Grandmaster', label: 'Grandmaster' },
        { value: 'Challenger', label: 'Challenger' },
      ],
    },
    val: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Iron', label: 'Iron' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Ascendant', label: 'Ascendant' },
        { value: 'Immortal', label: 'Immortal' },
        { value: 'Radiant', label: 'Radiant' },
      ],
    },
    csgo: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Silver Elite', label: 'Silver Elite' },
        { value: 'Gold Nova', label: 'Gold Nova' },
        { value: 'Master Guardian', label: 'Master Guardian' },
        { value: 'Master Guardian Elite', label: 'Master Guardian Elite' },
        {
          value: 'Distinguished Master Guardian',
          label: 'Distinguished Master Guardian',
        },
        { value: 'Legendary Eagle', label: 'Legendary Eagle' },
        {
          value: 'Supreme Master First Class',
          label: 'Supreme Master First Class',
        },
        { value: 'Global Elite', label: 'Global Elite' },
      ],
    },
    apex: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Master', label: 'Master' },
        { value: 'Apex Predator', label: 'Apex Predator' },
      ],
    },
    rainbow: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Copper', label: 'Copper' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Champion', label: 'Champion' },
      ],
    },
    overwatch: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Master', label: 'Master' },
        { value: 'Grandmaster', label: 'Grandmaster' },
        { value: 'Top 500', label: 'Top 500' },
      ],
    },
    rocket: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Champion', label: 'Champion' },
        { value: 'Grand Champion', label: 'Grand Champion' },
        { value: 'Supersonic Legend', label: 'Supersonic Legend' },
      ],
    },
    fortnite: {
      ranks: [
        { value: '', label: 'Select a rank' },
        { value: 'Bronze', label: 'Bronze' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Platinum', label: 'Platinum' },
        { value: 'Diamond', label: 'Diamond' },
        { value: 'Elite', label: 'Elite' },
        { value: 'Champion', label: 'Champion' },
        { value: 'Unreal', label: 'Unreal' },
      ],
    },
  };

  const successAlert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your clip has been submitted',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="form-label" htmlFor="youtubeLink">
            Youtube Link <span style={{ color: '#e34234' }}>*</span>
          </label>
          <input
            className="form-input"
            type="url"
            id="youtubeLink"
            name="youtubeLink"
            value={youtubeLink}
            onChange={handleYoutubeLinkChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="playerInfo" className="form-label">
            Player Info <span style={{ color: '#e34234' }}>*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="playerInfo"
            name="playerInfo"
            value={playerInfo}
            onChange={handlePlayerInfoChange}
            required
          />
        </div>
        <div className="form">
          <select
            className="select"
            id="rank"
            name="rank"
            value={selectedRank}
            onChange={handleRankChange}
            required
          >
            {gameOptions[props.game].ranks.map((rank) => (
              <option key={rank.value} value={rank.value}>
                {rank.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <label
            htmlFor="checkbox"
            style={{ color: 'white', marginLeft: '10px' }}
          >
            I agree to the terms and conditions
          </label>
        </div>
        <button
          className="submit-button"
          type="submit"
          disabled={!isChecked || !isYoutubeLinkValid}
          onClick={successAlert}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Submit;
