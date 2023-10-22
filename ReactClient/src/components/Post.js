import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { Navigation } from '../screens/Navigation';





 export const Post =({id, title, imageUrl, createdAt},{navigation}) =>{
    return(
        
        <PostView key={id}>
        
        <PostImage
         source={{uri: imageUrl}}/>
            <PostDetails>        
        
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt.toDate().toLocaleString()}</PostDate>
            </PostDetails>
            
        </PostView>
        
    
    )

};
export default Post;




const PostView = styled.View`

flex-direction:row;
padding: 10px;

border-bottom-color:rgba(0,0,0,0.1);
border-bottom-style: solid;
border-bottom-width: 1px;
`;

const PostImage = styled.Image`
width: 60px;
height:60px;
border-radius: 12px;

margin-right: 12px;
`;

const PostTitle = styled.Text`
font-size: 17px;
font-weight:700;
`;

const PostDate = styled.Text`
font-size: 12px;
color: rgba(0,0,0,0.4);
margin-top: 2px;
`;



const PostDetails = styled.View`
justify-content: center;
flex: 1;
`;
