import React,{Component} from 'react'
import PostData from './List.json'
import './postList.css'

class PostList extends Component {


    render(data){
        // const Lista = data.map(datos=> <PostData key={datos.id} datos={datos}/>)
        // const listFWT = people.map(person=> <PersonList key={person.id} person={person}/>)

        return(
            <div className="blueviolet">
                {PostData.map( (postDetail, index)=> {
                    return <h1 key={index}> {postDetail.kanji} - {postDetail.hiragana}</h1>
                }
                )}
            </div>
        )
    }

}

export default PostList
