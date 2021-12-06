import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

function Profile() {

    const { githubState } = useGithub();


    return (
        <S.Wrapper>
            <S.WrapperImage src={ githubState.user.avatar_url } alt="Foto de perfil do Github" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{ githubState.user.name }</h1>
                    <S.WrapperGeneric> 
                        <h3>Username: </h3>
                        <a 
                            href={ githubState.user.html_url } 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            { githubState.user.login }
                        </a>
                    </S.WrapperGeneric>

                    <S.WrapperGeneric> 
                        <h3>Company: </h3>
                        <span> { githubState.user.company } </span>
                    </S.WrapperGeneric>

                    <S.WrapperGeneric> 
                        <h3>Location: </h3>
                        <span> { githubState.user.location } </span>
                    </S.WrapperGeneric>

                    <S.WrapperGeneric> 
                        <h3>Blog: </h3>
                                                <a 
                            href={ githubState.user.blog } 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            { githubState.user.blog }
                        </a>
                    </S.WrapperGeneric>
                </div>

                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{ githubState.user.followers }</span>
                    </div>

                    <div>
                        <h4>Followings</h4>
                        <span>{ githubState.user.following }</span>
                    </div>

                    <div>
                        <h4>Gists</h4>
                        <span>{ githubState.user.public_gists }</span>
                    </div>

                    <div>
                        <h4>Repositories</h4>
                        <span>{ githubState.user.public_repos }</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;