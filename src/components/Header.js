import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderSection>
        <ul>
          <li>
            <Link href="/products" passHref>
              <button>Produkte</button>
            </Link>
          </li>

          <li>
            <Link href="/categories" passHref>
              <button>Kategorie</button>
            </Link>
          </li>

          <li>
            <Link href="create-products" passHref>
              <button>Produkt Hinzufügen</button>
            </Link>
          </li>

          <li>
            <Link href="/create-category" passHref>
              <button>Kategries Hinzufügen</button>
            </Link>
          </li>
        </ul>
      </HeaderSection>
    </>
  );
}
const HeaderSection = styled.section`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  witdh: 100vw;
  height: 70px;
  background-color: purple;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style-type: none;
    gab: 20%;
    padding: 40px;
  }
  button {
    padding: 5px 15px 5px 15px;
    border-radius: 5px;
    background-color: hotpink;
    color: black;
    border: none;
  }
`;
