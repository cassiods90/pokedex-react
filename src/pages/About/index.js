import * as React from 'react'
import { Container, Content, Title, SubTitle, Contact, SocialContact, SocialContactLink, PersonOutlineIcon, LinkedinOutlineIcon, GithubOutlineIcon} from './styles'

function About() {


    return (
        <Container>
            <Content>
                <Title>Hi, this project was developed by Cássio Spessatto. </Title>
                <SubTitle>Find me on the links below:</SubTitle>

                <Contact>
                        <SocialContact> 
                            <SocialContactLink href="https://cassiospessatto.com.br/" target="_blank"><PersonOutlineIcon /></SocialContactLink>
                        </SocialContact>

                        <SocialContact>                             
                            <SocialContactLink href="https://www.linkedin.com/in/cassiopossamaispessatto/" target="_blank"><LinkedinOutlineIcon /></SocialContactLink>
                        </SocialContact>

                        <SocialContact>              
                            <SocialContactLink href="https://github.com/cassiods90" target="_blank"><GithubOutlineIcon /></SocialContactLink>
                        </SocialContact>
                </Contact>
            </Content>
        </Container>
    )
}

export { About }