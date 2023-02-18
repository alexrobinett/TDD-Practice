import cipherMessage from './caesarCipher';


test('the quick brown fox equals ymj vznhp gwtbs ktc with a shift of 5', () => {
    expect(cipherMessage("the quick brown fox jumps over the lazy dog.",5)).toBe("ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.");
})

