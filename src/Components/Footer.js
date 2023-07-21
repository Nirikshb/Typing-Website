import { useState } from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '2rem'
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', JSON.stringify(selectedTheme));
  };

  const handleGithub = () => {
    window.open("https://github.com/Nirikshb/Typing-Website", '_blank', 'noopener noreferrer');
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/niriksh-bharti-862ba3136/", '_blank', 'noopener noreferrer');
  };

  const handleDocs = () => {
    window.open("https://docs.google.com/document/d/14oZ1HpCgtT-0ZbuiMr9SOH1ov88xnQA2-hq08U--Hsk/edit?usp=sharing", '_blank', 'noopener noreferrer');
  };

  return (
    <div className="footer">
      <div className="links">
        <GitHubIcon style={iconStyle} onClick={handleGithub} title="GitHub" />
        <LinkedInIcon style={iconStyle} onClick={handleLinkedin} title="LinkedIn" />
        <DocumentScannerIcon style={iconStyle} onClick={handleDocs} title="Documentation" />
      </div>
      <div className="copyright">
        Copyright © by Niriksh Bharti
      </div>

      <div className="themeButton">
        <Select
          onChange={handleThemeChange}
          options={themeOptions}
          menuPortalTarget={document.body}
          defaultValue={theme}
          styles={{
            control: styles => ({
              ...styles,
              backgroundColor: theme.background,
              color: theme.textColor
            }),
            menu: styles => ({ ...styles, backgroundColor: theme.background }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: (!isFocused ? theme.background : theme.textColor),
                color: (!isFocused ? theme.textColor : theme.background),
                cursor: 'pointer'
              };
            }
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
