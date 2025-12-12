import Api from './Api';

const Card = () => {
    return (
        <>
            <div className='w-100'>
                <div className='w-1140'>
                    <div className="flex">
                        <div className="Card-1">
                            <Api
                                imageUrl="https://rickandmortyapi.com/api/character/avatar/405.jpeg"
                                title="Trunkphobic suspenders guy"
                                P1="Alive - Human"
                                P2="Last known location:"
                                P3="Earth (Replacement Dimension)"
                                P4="First seen in:"
                                P5="Lawnmower Dog"
                            />
                        </div>
                        {/* <div className="Card-1">
                            <Api
                                imageUrl="https://rickandmortyapi.com/api/character/avatar/405.jpeg"
                                title="Trunkphobic suspenders guy"
                                P1="Alive - Human"
                                P2="Last known location:"
                                P3="Earth (Replacement Dimension)"
                                P4="First seen in:"
                                P5="Lawnmower Dog"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
