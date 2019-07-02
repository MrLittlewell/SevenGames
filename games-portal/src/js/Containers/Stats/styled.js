import styled from 'styled-components'


export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const PageContent = styled.div`
  height: 100%;
  width: 100%;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
`
export const PageTitle = styled.span`
  font-size: 2em;
  color: #3e3e3e;
`
export const StatTable = styled.div`
  margin: 1.5em 0em 0 1.5em;
  box-sizing: border-box;
  width: 35em;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
`
export const StatTableValues = styled(StatTable)`
  margin-left: 1.5em;
  margin-top: 0;
`
export const StatTableLine = styled.div`
  display: flex;
  flex-direction: row;
`
export const StatTableRow = styled.div`
  padding: 1em;
  box-sizing: border-box;
  color: #777777;
  &:nth-child(1) {
    width: 70%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`