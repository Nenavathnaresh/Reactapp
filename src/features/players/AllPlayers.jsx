import React from "react";
import { useAddNewPlayerMutation, useGetAllPlayersQuery, useLazyGetAllPlayersQuery, useLazyGetSelectedPlayersQuery, useUpdatePlayerMutation } from "../../services/playersAPI";

function AllPlayers(){

    const [addnewPlayer] = useAddNewPlayerMutation() 
    const [updateplayer] = useUpdatePlayerMutation()
    const [fetchupd] = useLazyGetSelectedPlayersQuery()
    const [fetchall] = useLazyGetAllPlayersQuery()


    const handlePlayers = (player)=>{
       if(!player.isSelected){
        var temp = {...player,isSelected:true}   
        updateplayer(player)
            addnewPlayer(temp).then(()=>{
                fetchupd()
                fetchall()
            })
       }
    }


   const {data,isLoading} =  useGetAllPlayersQuery()
//    console.log(x);
    return(
        <div className="d-flex flex-wrap justify-content-between">
            {isLoading&&(<h1>Please...wait...</h1>)}
            {!isLoading&&(
                data.map((player)=>{
                    return(
                        <h1 onClick={()=>{handlePlayers(player)}} className={player.isSelected?"w-25 border shadow border-3 border-danger selT m-2 rounded text-center":"w-25 border border-3 border-primary m-2 rounded shadow selF text-center"}>{player.id}</h1>
                    )
                })
            )}

        </div>
    )
}
export default AllPlayers