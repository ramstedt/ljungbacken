import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&amp;display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

@media screen and (max-width: 970px) {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #dee2e7;
    }
    ::-webkit-scrollbar-thumb {
      background: #aac2da;
    }
    #menu-btn:checked ~ .nav-links {
      right: 0%;
    }
    #menu-btn:checked ~ .btn.menu-btn {
      display: none;
    }
    #close-btn:checked ~ .btn.menu-btn {
      display: block;
    }
    #showDrop:checked ~ .drop-menu,
    #showMega:checked ~ .mega-box {
      max-height: 100%;
    }
  }

`;

const Nav = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: white;
`;

//class: wrapper
const Wrapper = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    display: none;
  }
`;

//wrapper logo a
const Logo = styled.div`
  a {
    color: black;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
`;

//mobile-item
const MobileItem = styled.label`
  display: none;
  @media screen and (max-width: 970px) {
    display: block;
    color: black;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;

    &hover {
      background: #aac2da;
    }
  }
`;

//drop-menu
const DropMenu = styled.ul`
  position: absolute;
  background: #dee2e7;
  width: 180px;
  line-height: 45px;
  top: 85px;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  li a {
    width: 100%;
    display: block;
    padding: 0 0 0 15px;
    font-weight: 400;
    border-radius: 0px;
  }

  @media screen and (max-width: 970px) {
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;

    li {
      margin: 0;
    }
    li a {
      border-radius: 5px;
      font-size: 18px;
    }
  }
`;

//mega-box
const MegaBox = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 30px;
  top: 85px;
  opacity: 0;
  visibility: hidden;

  @media screen and (max-width: 970px) {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;
const NavLinks = styled.ul`
  display: inline-flex;

  li {
    list-style: none;
  }

  li a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 9px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  li a:hover {
    background: #aac2da;
  }

  li:hover ${DropMenu}, li:hover ${MegaBox} {
    transition: all 0.3s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 970px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    right: -100%;
    background: #dee2e7;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    li {
      margin: 15px 10px;
    }
    li a {
      padding: 0 20px;
      display: block;
      font-size: 20px;
    }
  }
`;
const Content = styled.div`
  background: #dee2e7;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 970px) {
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;
const Row = styled.div`
  width: calc(25% - 30px);
  line-height: 45px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    &:nth-child(1),
    &:nth-child(2) {
      border-top: 0px;
    }
  }
`;

const Header = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 970px) {
    font-size: 19px;
  }
`;

const MegaLinks = styled.ul`
  margin-left: -40px;
  border-left: 1px solid rgba(255, 255, 255, 0.09);

  li {
    padding: 0 20px;
  }

  li a {
    padding: 0px;
    padding: 0 20px;
    color: #565759;
    font-size: 17px;
    display: block;
  }

  li a:hover {
    color: black;
  }

  @media screen and (max-width: 970px) {
    border-left: 0px;
    padding-left: 15px;
    li {
      margin: 0;
    }
  }
`;

//btn.close-btn
const BtnCloseBtn = styled.label`
  position: absolute;
  right: 30px;
  top: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 970px) {
    display: block;
  }
`;

const MenuBtn = styled.label`
  position: absolute;
  right: 30px;
  top: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 970px) {
    display: block;
  }
`;

const DesktopItem = styled.div`
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Wrapper>
          <Logo>
            <Link href='#'>Ljungbackens</Link>
          </Logo>
          <input type='radio' name='slider' id='menu-btn' />
          <input type='radio' name='slider' id='close-btn' />
          <NavLinks className='nav-links'>
            <BtnCloseBtn htmlFor='close-btn'>
              <IoCloseSharp />
            </BtnCloseBtn>
            <li>
              <Link href='/'>Om Ljungbacken</Link>
            </li>
            <li>
              <DesktopItem>
                <Link href='#'>Galleri</Link>
              </DesktopItem>
              <input type='checkbox' id='showDrop' />
              <MobileItem htmlFor='showDrop'>Galleri</MobileItem>
              <DropMenu className='drop-menu'>
                <li>
                  <Link href='#'>Information</Link>
                </li>
                <li>
                  <Link href='#'>Utställningar</Link>
                </li>
                <li>
                  <Link href='#'>För Konstnärer</Link>
                </li>
              </DropMenu>
            </li>

            {/* <li>
        <a href='#' className='desktop-item'>
          Dropdown Menu
        </a>
        <input type='checkbox' id='showDrop' />
        <label htmlFor='showDrop' className='mobile-item'>
          Dropdown Menu
        </label>
        <ul className='drop-menu'>
          <li>
            <a href='#'>Drop menu 1</a>
          </li>
          <li>
            <a href='#'>Drop menu 2</a>
          </li>
          <li>
            <a href='#'>Drop menu 3</a>
          </li>
          <li>
            <a href='#'>Drop menu 4</a>
          </li>
        </ul>
      </li> */}

            <li>
              <DesktopItem href='#'>
                <Link href='#'>Kurser</Link>
              </DesktopItem>
              <input type='checkbox' id='showMega' />
              <MobileItem htmlFor='showMega'>Kurser</MobileItem>
              <MegaBox className='mega-box'>
                <Content>
                  <Row>
                    <img src='img.jpg' alt='' />
                  </Row>
                  <Row>
                    <Header>Kurser</Header>
                    <MegaLinks>
                      <li>
                        <Link href='#'>Konst Workshop</Link>
                      </li>
                      <li>
                        <Link href='#'>Vinprovning</Link>
                      </li>
                      <li>
                        <Link href='#'>Cava & Kavla</Link>
                      </li>
                      <li>
                        <Link href='#'>Kroki</Link>
                      </li>
                      <li>
                        <Link href='#'>Oljmåleri</Link>
                      </li>
                      <li>
                        <Link href='#'>Kol Teckning</Link>
                      </li>
                      <li>
                        <Link href='#'>ART TALK & WINE</Link>
                      </li>
                    </MegaLinks>
                  </Row>
                  <Row>
                    <Header>Information</Header>
                    <MegaLinks>
                      <li>
                        <Link href='#'>Instruktörer</Link>
                      </li>
                      <li>
                        <Link href='#'>Boka</Link>
                      </li>
                    </MegaLinks>
                  </Row>
                </Content>
              </MegaBox>
            </li>
            <li>
              <input type='checkbox' id='showDrop' />
              <MobileItem htmlFor='showDrop'>Hyr Lokal</MobileItem>
              <DropMenu className='drop-menu'>
                <li>
                  <Link href='#'>Vad Ingår</Link>
                </li>
                <li>
                  <Link href='#'>Utställningar</Link>
                </li>
                <li>
                  <Link href='#'>För Konstnärer</Link>
                </li>
              </DropMenu>
            </li>
          </NavLinks>
          <MenuBtn htmlFor='menu-btn' className='btn menu-btn'>
            <IoIosMenu />
          </MenuBtn>
        </Wrapper>
      </Nav>
    </>
  );
}
