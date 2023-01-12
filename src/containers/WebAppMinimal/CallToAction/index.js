import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
import { Button, MenuItem } from 'react-aria-menubutton';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {
  Pattern,
  Content,
  DownloadButton,
  DownloadOptions,
} from './cta.style';

const menuItemWords = ['Signup Today', ''];

const CallToAction = () => {
  const [downloadFor, setDownloadFor] = useState('Signup Today');
  const handleSelection = (value) => {
    setDownloadFor(value);
  };
  return (
    <Section>
      <Pattern />
      <Container width="1400px">
        <Content>
          <Heading content="Sign Up For Your Free Trial Today!" />
          <Text content="" />
          <DownloadButton onSelection={handleSelection}>
            <a href="#">
            <Button style={{color:'black'}} className="MyMenuButton-button">
              {downloadFor}
              <svg width="10" height="7" viewBox="0 0 10 7">
                <path
                  d="M5.44413 6.90245L9.96026 0.354064C10.0079 0.284742 10.0129 0.194871 9.97426 0.120806C9.9352 0.0465161 9.85842 0 9.77442 0L0.742167 0C0.658168 0 0.581168 0.0465161 0.542104 0.120806C0.524942 0.153774 0.516361 0.189903 0.516361 0.225806C0.516361 0.270742 0.52991 0.315452 0.55633 0.354064L5.07246 6.90245C5.11468 6.96364 5.18401 7 5.2583 7C5.33259 7 5.40191 6.96342 5.44413 6.90245Z"
                  fill="black"
                />
              </svg>
            </Button>  
            </a>
            <DownloadOptions>
              {/* <ul>
                {menuItemWords.map((word, i) => {
                  return (
                    <li key={i}>
                      <MenuItem className="MyMenuButton-menuItem">
                        {word}
                      </MenuItem>
                    </li>
                  );
                })}
              </ul> */}
            </DownloadOptions>
          </DownloadButton>
          <span>
            <Link href="#">Signup today and join our Ai community of 10,000+ members!</Link>
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
