import styled from 'styled-components'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            lorem jkshadkjahd
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl=""/>
    </QuizBackground>
  )
}
