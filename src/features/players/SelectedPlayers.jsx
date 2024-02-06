import React from "react";
import { useDeletePlayerMutation, useGetSelectedPlayersQuery, useLazyGetAllPlayersQuery, useLazyGetSelectedPlayersQuery, useUpdatePlayerMutation } from "../../services/playersAPI";

function SelectedPlayers() {

    const { data, isLoading } = useGetSelectedPlayersQuery()
    const [deleteplayer] = useDeletePlayerMutation()
    const [updateply] = useUpdatePlayerMutation()
    const [fetchall] = useLazyGetAllPlayersQuery()
    const [fetchupd] = useLazyGetSelectedPlayersQuery()

    const handleDelete = (player)=>{
        deleteplayer(player)
        updateply(player).then(()=>{
            fetchupd()
            fetchall()
        })
       
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {isLoading && (<h1>Please...wait</h1>)}
            {!isLoading && (
                data.map((player) => {
                    return (
                        <h1 onClick={()=>{handleDelete(player)}} className="w-25 border border-3 border-warning shadow m-2 rounded text-center">{player.id}</h1>
                    )
                })
            )}
        </div>
    )
}
export default SelectedPlayers