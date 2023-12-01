import React, { useEffect, useState } from 'react';
import InstagramEmbed from 'react-instagram-embed'
import styled from 'styled-components';

export const Feed = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .post {
        margin: irem;
        width: calc(25% - 2rem);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;

        .image {
            width: 100%;
            height: auto;
            display: block;
        }

        &:hover {
            transform: scale(1.05);
        }

        .caption {
            padding: irem;
        }
    }
`;


class Post extends React.Component {
    render() {
      const posts = this.props.data.allInstaNode.edges;
  
      return (
        <Feed>
            {posts.map(({ node }) => {
                const { id, caption, permalink, localFile, timestamp, mediaType } = node;

            if (localFile && localFile.childImageSharp && (mediaType != 'VIDEO')) {
                return (
                    <div className='post' key={id}>
                        <a href={permalink}>
                            <img 
                                className='image'  
                                src={localFile.childImageSharp.fluid.src}
                                alt={caption}/>
                        </a>
                        
                        {/* <div className='caption'>
                            <p>{caption}</p>
                            <a href={permalink} target='_blank' rel='noopener noreferrer'>
                                View on Instagram
                            </a>
                        </div> */}
                    </div>
                );
            } else {
                console.warn(`Skipping post with ID ${id} due to missing image data...`);
                return null;
            }
            })}
        </Feed>
      );
    }
  }


// class Post extends React.Component {
//   render() {
//     const posts = this.props.data.allInstaNode.edges;

//     console.log(posts);

//     return (
//       <Feed>
//         {posts.map(({ node }) => {
//             const { id, caption, permalink } = node;

//             return (
//                 <InstagramEmbed
//                     key={id}
//                     url={permalink}
//                     hideCaption={false}
//                     containerTagName='div'
//                     protocol=''
//                     injectScript
//                     onLoading={() => {}}
//                     onSuccess={() => {}}
//                     onFailure={() => {}}
//                 />
//             );
//         })}
//       </Feed>
//     );
//   }
// }

// const Post = ({ data }) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = '/api/facebookProxy';

//         // Extracting Instagram URLs from the GraphQL query result
//         const instagramURLs = data.allInstaNode.edges.map(({ node }) => node.permalink);

//         // Use Promise.all to concurrently fetch data from multiple URLs
//         const fetchPromises = instagramURLs.map(url => {
//           const params = {
//             url,
//             hidecaption: false,
//             omitscript: true,
//             fields: 'html',
//           };
//           const apiUrlWithParams = `${apiUrl}?${new URLSearchParams(params)}`;

//           return fetch(apiUrlWithParams).then(response => response.json());
//         });

//         const results = await Promise.all(fetchPromises);

//         // Assuming your results contain arrays of posts
//         const allPosts = results.flatMap(result => result.posts || []);
//         setPosts(allPosts);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [data]);

//   if (loading) {
//     return <p>Loading...</p>; // Display a loading indicator
//   }

//   return (
//     <Feed>
//       {posts.map(({ id, permalink }) => (
//         <InstagramEmbed
//           key={id}
//           url={permalink}
//           // url='https://www.instagram.com/p/Czys-kbOVt5/'
//           hideCaption={false}
//           containerTagName='div'
//           protocol=''
//           injectScript
//           onLoading={() => {}}
//           onSuccess={() => {}}
//           onFailure={() => {}}
//         />
//       ))}
//     </Feed>
//   );
// };

export default Post;
