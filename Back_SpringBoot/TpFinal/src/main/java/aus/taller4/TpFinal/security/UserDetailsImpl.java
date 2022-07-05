package aus.taller4.TpFinal.security;

import java.util.Collection;
import java.util.List;

import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;



import aus.taller4.TpFinal.modal.Usuario;



public class UserDetailsImpl implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private String username;
	private String email;
	
	private String password;
	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl( String username, String password,String email,
			Collection<? extends GrantedAuthority> authorities) {
	
		this.username = username;
		this.email=email;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(Usuario user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getRol().name())).collect(Collectors.toList());
		return new UserDetailsImpl(user.getUsuario(), user.getContrasena(),user.getEmail() ,authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	
	
	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	

}
