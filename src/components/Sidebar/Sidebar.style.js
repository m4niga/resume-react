import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    height:100vh;
    width:8%;
    background-color: #222222;
`;

export const MenuItemsContainer = styled.div`
flex-direction: column;
display:flex;
align-items:center;
`

export const MenuItem = styled.div`
border-bottom: solid 1px #333333;
height:12vh;
width:100%;
color:#eeeeee;
display:block;
font-size:.7rem;
text-align:center;
padding-top:1rem;
&:hover{
    color: #7ac565;
}
`;

export const Icon = styled.i`
display:block;
font-size:2.3rem;
margin-bottom:-1rem;
&:active{
    color: #7ac565;
}`;