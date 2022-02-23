pragma solidity >=0.4.22 <0.9.0;

contract DecentralGram {
    string public name = "DecentralGram";
    

    //store an image
    uint public imageCount = 0 ;
    mapping(uint => Image) public images;
    struct Image {
        uint id;
        string hash;
        string description;
        uint tipAmount;
        address payable author;
    }
    
    event ImageCreated (
        uint id,
        string hash,
        string description,
        uint tipAmount,
        address payable author
    );
    
    event ImageTip (
        uint id,
        string hash,
        string description,
        uint tipAmount,
        address payable author
    );
    //create an image
    function uploadImage(string memory _imageHash, string memory _description) public {
        //make sure the image hash exist
        require(bytes(_imageHash).length > 0 ,'Image Hash is required');

        //make sure image description exist
        require(bytes(_description).length > 0,'Image description is required');
        //make sure uploader address exist

        require(msg.sender != address(0x0));
        imageCount++;
        images[imageCount] = Image(imageCount,_imageHash,_description, 0 , payable(address(msg.sender)));
        emit ImageCreated(imageCount,_imageHash,_description, 0 , payable(address(msg.sender)));
    }

    //tip an image
    function tipImageOwner(uint _id) public payable {
        require(_id > 0 && _id <= imageCount);
        Image memory _image = images[_id];
        address payable _author = _image.author;
        _author.transfer(msg.value);
        _image.tipAmount = _image.tipAmount + msg.value;
        images[_id] = _image;
        emit ImageTip(_id, _image.hash, _image.description, _image.tipAmount, _author);
    }
}