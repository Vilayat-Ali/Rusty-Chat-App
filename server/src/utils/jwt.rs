
use jsonwebtoken::{decode, encode, errors, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub username: String,
    pub email: String,
}

impl Claims {
    fn new(username: String, email: String) -> Self {
        Self { username, email }
    }
}

pub fn generate_token(username: String, email: String) -> errors::Result<String> {
    let token: String = encode(
        &Header::default(),
        &Claims::new(username, email),
        &EncodingKey::from_secret("secret".as_ref()),
    )?;
    Ok(token)
}

pub fn verify_token(token: String) -> Option<Claims> {
    match decode::<Claims>(
        &token,
        &DecodingKey::from_secret("secret".as_ref()),
        &Validation::default(),
    ) {
        Ok(decoded_data) => Some(decoded_data.claims),
        Err(_) => None,
    }
}
